import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { fontSizes, paddings } from "../utils/sizes";
import { colors } from "../utils/colours";

// THIS CONVERTS MINUTES TO MS
const minutesToMillis = (min) => min * 1000 * 60;
// BELOW IS TO FORMAT THE CLOCK SO WHEN THE TIMER IS IN SINGLE DIGITS COUNTING DOWN TO ZERO, THE 0 BEFORE THIS DIGITS STILL SHOWS AND DOESNT DISAPPEAR TO KEEP THE CLOCK INTERFACE
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({
  minutes = 20,
  isPaused,
  onStart = () => {},
  onPause = () => {},
  onEnd = () => {},
  onProgress = () => {},
}) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes));
  // useRef is a react hook - the difference between this hook and useState is that this will not cause a re-render like useState will. 
  // useRef also only returns ONE object which we set to a varianle outseld 
  // useRef tracks the value of setInterval below so that we can clear it incase we want to clear the timer or for another reason etc.
  // So initially we set the value to null
  const interval = React.useRef(null);

  const countDown = () =>
    setMillis((time) => {
      // Here we call 'time' as a callback function so we can guarantee that whenever the function runs it is always the previously set amount of ms that was given to millis - so that the timer does not restart restart the count each second mening the timer doesnt actually count down
      if (time === 0) {
        clearInterval(interval.current);
        // So here if the time value is 0 then the countdown timer will end
        onEnd();
        return time;
      }
      // Here if the time is not 0, then take a second off (count down by 1s) and return that time - this is how we show out countdown timer
      const timeLeft = time - 1000;
      onProgress((timeLeft / minutesToMillis(minutes)) * 100);
      return timeLeft;
    });

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

// Then this is our function - isPaused is a property of our countdown timer
  useEffect(() => {
    if (isPaused) {
      onPause();
      if (interval.current) clearInterval(interval.current);
      return;
    }
    onStart();
    // setInterval allows us to call a function after a certain period of time (1000ms or 1s)
    // So every second we call the function countdown - and hence the timer counts down
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    // THIS RENDERS THE CLOCK INTERFACE
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: "#fff",
    padding: paddings.lg,
    backgroundColor: "#949494",
  },
});
