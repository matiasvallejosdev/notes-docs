import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.main}>
      <p>
        Integer eu neque vitae lacus tincidunt facilisis non et erat. Quisque
        dolor elit, auctor nec neque ut, commodo eleifend magna. Suspendisse a
        interdum augue, in finibus magna. Ut quis efficitur arcu, id consequat
        est. Sed efficitur et ex id condimentum. Donec non lorem neque. Mauris
        semper nulla mi, in ornare odio interdum id. Maecenas at mollis nibh,
        vel fringilla urna. Vivamus sodales hendrerit tortor, ac iaculis quam
        aliquam ut. Ut posuere ipsum in mi ultrices auctor. Donec accumsan
        varius consequat. Nam commodo massa enim, nec imperdiet est mollis a.
        Aenean eu tincidunt enim.
      </p>
      <button className={styles.btn}>More</button>
    </main>
  );
}

export default About;
