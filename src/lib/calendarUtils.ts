export const googleCalendarLink = (title: string, description: string, startTime: string, endTime: string, location: string | null = '') => {
  const start = new Date(startTime).toISOString().replace(/-|:|\.\d+/g, '');
  const end = new Date(endTime).toISOString().replace(/-|:|\.\d+/g, '');
  
  const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
  const url = `${baseUrl}&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description || '')}&dates=${start}/${end}&location=${encodeURIComponent(location || '')}`;
  
  return url;
};

export const downloadIcsFile = (title: string, description: string, startTime: string, endTime: string, location: string | null = '') => {
  const start = new Date(startTime).toISOString().replace(/-|:|\.\d+/g, '');
  const end = new Date(endTime).toISOString().replace(/-|:|\.\d+/g, '');
  
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `SUMMARY:${title}`,
    `DESCRIPTION:${description || ''}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `LOCATION:${location || ''}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${title.replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
