#include <signal.h>

static int how_many_times = 0;

void handle_signal() {
    signal(SIGINT, receiver);
}

void receiver(int num) {
    how_many_times++;

    if (how_many_times == 2) {
        exit(1);
    }

    printf("(Press it again to Exit the Application)\n");
}