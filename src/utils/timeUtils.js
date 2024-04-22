export const getCurrentTime = () => {
    const currentDate = new Date()
    let hour = currentDate.getHours().toString().padStart(2, '0')
    const minutes = currentDate.getMinutes();
    const formattedHour = hour.toString().padStart(2, '0');
    // const formattedMinute = Math.ceil(minutes / 5) * 5 .toString().padStart(2, '0');
    const roundedMinutes = Math.ceil(minutes / 5) * 5;
    const formattedMinute = roundedMinutes < 10 ? '0' + roundedMinutes : roundedMinutes;
    return `${formattedHour}:${formattedMinute}`;
}

export const generateHours = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j += 5) {
            const hour = i;
            const formattedHour = `${hour.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`;
            hours.push(formattedHour);
        }
    }
    return hours;
};
