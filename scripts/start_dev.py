#!/usr/bin/env python3
"""Properly daemonize the Next.js dev server using double-fork."""
import os
import sys
import subprocess
import time
from pathlib import Path

PROJECT = "/home/z/my-project"
LOG = "/home/z/my-project/dev.log"
PIDFILE = "/home/z/my-project/dev.pid"


def daemonize():
    """Classic Unix double-fork daemonization."""
    # First fork
    if os.fork() > 0:
        sys.exit(0)

    os.setsid()

    # Second fork
    if os.fork() > 0:
        sys.exit(0)

    # Redirect stdio
    sys.stdout.flush()
    sys.stderr.flush()
    with open("/dev/null", "rb") as devnull_in:
        os.dup2(devnull_in.fileno(), 0)
    log_fh = open(LOG, "ab")
    os.dup2(log_fh.fileno(), 1)
    os.dup2(log_fh.fileno(), 2)


def main():
    # Kill any stale server first
    if os.path.exists(PIDFILE):
        try:
            old_pid = int(open(PIDFILE).read().strip())
            os.kill(old_pid, 9)
        except Exception:
            pass
        os.unlink(PIDFILE)

    # Also try pkill as a fallback
    subprocess.run(["pkill", "-9", "-f", "next dev"], capture_output=True)
    subprocess.run(["pkill", "-9", "-f", "next-server"], capture_output=True)
    time.sleep(2)

    # Truncate log
    open(LOG, "w").close()

    # Daemonize
    daemonize()

    # Now we're in the daemon — exec next dev
    env = os.environ.copy()
    env["NODE_ENV"] = "development"
    os.execvpe("npx", ["npx", "next", "dev", "-p", "3000"], env)


if __name__ == "__main__":
    main()
    # Parent exits here
