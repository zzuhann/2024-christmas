import emailjs from "@emailjs/browser";

export const sendEmail = (fromName: string) => {
  emailjs
    .send(
      "service_1ntg378",
      "template_tkno4ce",
      {
        from_name: fromName,
      },
      "hq9I2K5MtKz8_oT0P"
    )
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
