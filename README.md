Run project with yarn start

Issues
If you have Node 17+ you may get an error:0308010C:digital envelope routines::unsupported

to fix it run:

# 👇️ macOS, Linux or Windows Git Bash

export NODE_OPTIONS=--openssl-legacy-provider

# 👇️ Windows CMD

set NODE_OPTIONS=--openssl-legacy-provider
