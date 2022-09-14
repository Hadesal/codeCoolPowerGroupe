#!/bin/bash -x

# This is a script to create a fork of VieProgBasicsCurriculum for a given student.
# NOTE you must do a `git auth login` first

USERNAME=$1
PERMISSION=admin

if [ -z "$USERNAME" ]; then
    echo "Please provide a USERNAME"
    exit 1
fi

# NOTE since gh 2.14.0 it should be possible to use --fork-name and thus skip the renaming below
gh repo fork \
    --clone=false \
    --org CodeCoolGlobal \
    --remote=true \
    https://github.com/CodecoolGlobal/VieProgBasicsCurriculum

gh repo rename \
    -R CodecoolGlobal/VieProgBasicsCurriculum-1 \
    VieProgBasicsCurriculum-$USERNAME

gh api \
    "repos/CodeCoolGlobal/VieProgBasicsCurriculum-$USERNAME/collaborators/$USERNAME" \
    --silent \
    -X PUT \
    -f permission=$PERMISSION \
