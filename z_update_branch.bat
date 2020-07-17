:: This batch file pulls current master and merges into current branch

@echo off

:: Option to use the batch file outside the repo and pass the repo path as an arg
set repoPath=%1
cd %repoPath%

FOR /F "tokens=*" %%g IN ('git rev-parse --abbrev-ref HEAD') do (SET currentBranch=%%g)

echo current branch is %currentBranch%
echo switching to master
git checkout master
echo.
echo pulling origin master
git pull origin master
echo.
echo switching back to %currentBranch%
git checkout %currentBranch%
echo.
echo attempting merge master into %currentBranch%
git merge master
echo.
echo script finished successfully
PAUSE