import emailjs from "@emailjs/browser";

export const sendEmail = (fromName: string) => {
  emailjs
    .send(
      "service_5xfn3uj",
      "template_n34ovxj",
      {
        from_name: fromName,
      },
      "d3NE6N9LoE4ezwk2I"
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
