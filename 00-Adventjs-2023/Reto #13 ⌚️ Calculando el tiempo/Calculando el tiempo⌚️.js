function calculateTime(deliveries) {
    let totalMilliseconds = BigInt(0);

    deliveries.forEach((timeStr) => {
        const [hours, minutes, seconds] = timeStr.split(":").map(BigInt);
        totalMilliseconds +=
            hours * BigInt(3600000) +
            minutes * BigInt(60000) +
            seconds * BigInt(1000);
    });

    totalMilliseconds = BigInt(7) * BigInt(3600000) - totalMilliseconds;

    let totalHours = totalMilliseconds / BigInt(3600000) * -1n;
    let totalMinutes = (totalMilliseconds % BigInt(3600000)) / BigInt(60000);
    let totalSeconds = (totalMilliseconds % BigInt(60000)) / BigInt(1000);

    const negative = totalMilliseconds > 0
    totalMinutes = Math.abs(Number(totalMinutes));
    totalSeconds = Math.abs(Number(totalSeconds));

    const formattedResult =
        `${negative ? "-" : ""}${Math.abs(
            Number(totalHours)
        )
            .toString()
            .padStart(2, "0")}:${totalMinutes
                .toString()
                .padStart(2, "0")}:${totalSeconds.toString().padStart(2, "0")}`;

    return formattedResult;

}

console.log(alculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'

console.log(calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
])) // '-05:29:00