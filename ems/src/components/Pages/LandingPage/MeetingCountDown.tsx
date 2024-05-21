"use client";

import { useEffect, useState } from 'react';

const formatTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const getNextMeetingTime = (currentTime: Date): Date => {
  const meetingDays = [1, 2, 4, 6]; // Monday, Tuesday, Thursday, Saturday
  const meetingHour = 12; // Noon (local time)

  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(currentTime);
    nextDay.setDate(currentTime.getDate() + i);
    nextDay.setHours(meetingHour, 0, 0, 0);

    if (meetingDays.includes(nextDay.getDay()) && nextDay > currentTime) {
      return nextDay;
    }
  }

  return new Date();
};

const getTimeDifference = (future: Date, current: Date): string => {
  const totalSeconds = Math.floor((future.getTime() - current.getTime()) / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const dayString = days > 0 ? `${String(days).padStart(2, '0')}d ` : '';
  return `${dayString}${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
};

const CurrentTime: React.FC = () => {
  const [timeUntilNextMeeting, setTimeUntilNextMeeting] = useState<string | null>(null);
  const [meetingStatus, setMeetingStatus] = useState<string>("We can't wait to see you!");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const updateTimes = () => {
      try {
        const now = new Date();
        const nextMeeting = getNextMeetingTime(now);
        const endOfMeeting = new Date(nextMeeting.getTime() + 1.5 * 60 * 60 * 1000);

        setTimeUntilNextMeeting(getTimeDifference(nextMeeting, now));

        if (now >= nextMeeting && now <= endOfMeeting) {
          setMeetingStatus("The meeting is ongoing<br>Come on in!");
        } else {
          setMeetingStatus("We can't wait to see you!");
        }
      } catch (error) {
        setError('Failed to calculate time');
      }
    };

    updateTimes();
    const intervalId = setInterval(updateTimes, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (timeUntilNextMeeting === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="rounded text-center p-7 h-72 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Meeting Countdown</h1>
        <p className="text-xl">{timeUntilNextMeeting}</p>
        <p className="text-xl" dangerouslySetInnerHTML={{ __html: meetingStatus }}></p>
      </div>
    </div>
  );
};

export default CurrentTime;
