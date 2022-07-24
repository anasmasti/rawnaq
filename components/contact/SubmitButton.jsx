import { useContext, useState } from "react";
import {
  contactFormContext,
  contactFormGlobalContext,
} from "../../contexts/contact/ContactFormContext";
import sendMessage from "../../utils/contact/sendMessage";

export default function SubmitButton() {
  const { formData, fillFormData } = useContext(contactFormContext);
  const { formGlobalData, fillFormGlobalData } = useContext(
    contactFormGlobalContext
  );
  const [isDone, setIsDone] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let handleSubmit = () => {
    // convert data to json for submit it
    let dataToJson = JSON.stringify(formData);

    if (
      formData.first_name == "" ||
      formData.last_name == "" ||
      formData.phone == "" ||
      formData.email == "" ||
      formData.message == ""
    ) {
      setHasError(true);
      setErrorMessage("You Must Complete All Fields ⛔️");
      setTimeout(() => {
        setHasError(false);
        setErrorMessage("");
      }, 2000);
    } else {
      // Send message to database
      sendMessage(dataToJson)
        .then(() => {
          setIsDone(true);
          fillFormGlobalData({
            sent: true,
          });
          fillFormData({
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setIsDone(false);
            fillFormGlobalData({
              sent: false,
            });
          }, 3000);
        })
        .catch((error) => {
          setHasError(true);
          setErrorMessage(error);
          // Empty the fields
          setTimeout(() => {
            setHasError(false);
            setErrorMessage("");
          }, 2000);
        });
    }
  };

  return (
    <button
      type="button"
      className={`p-3 ${isDone && "bg-green-500"} ${hasError && "bg-red-500"} ${
        !isDone && !hasError && "bg-blue-400"
      } rounded-xl text-white font-bold flex justify-center gap-1 transition-all duration-300 delay-75 hover:bg-black`}
      onClick={(e) => handleSubmit(e)}
      disabled={isDone || hasError}
    >
      {!isDone && !hasError && "Send Message"}
      {isDone && "Message Sent Successfully ✅"}
      {hasError && (errorMessage ? errorMessage : "There's An Error 📛")}
    </button>
  );
}
