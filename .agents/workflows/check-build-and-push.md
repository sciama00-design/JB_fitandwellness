---
description: check build and push to github
---

This workflow ensures the project builds correctly before pushing changes to GitHub.

1. Run the build command to verify stability
// turbo
```powershell
npm run build
```

2. Stage all changes
// turbo
```powershell
git add .
```

3. Commit changes (user will be prompted for a message if needed, or uses a default)
// turbo
```powershell
git commit -m "chore: manual build and push"
```

4. Push to remote
// turbo
```powershell
git push
```
