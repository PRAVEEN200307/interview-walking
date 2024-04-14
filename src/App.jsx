import SelectFormEL from "./components/forms/SelectFormEL";
import InputForm from "./components/forms/InputForm";
import TextAreaForm from "./components/forms/TextAreaForm";
import Formbutton from "./components/buttons/Formbutton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const schema = z
  .object({
    userRole: z.string().min(1),
    userName: z.string().min(3).max(20),
    userEmail: z.string().email(),
    userAddress: z.string().min(15).max(150),
    userQualification: z.string().min(15).max(150),
    userComments: z.string().min(10),
  })
  .required();

function App() {
  // background Coding
  const COLLECTION_NAME = "canditates";
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function getDataFormFireBase() {
      const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
      setCandidates(querySnapshot.docs.map((doc) => doc.data()));

      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`,doc.data());
      // });

      if (querySnapshot.docs.length === 0) {
        console.log("No record exist");
      }
    }
    getDataFormFireBase();
  }, []);

  // validatian
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmitFromTheServer = async (data) => {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log(data);
    alert("You are data is added");
    reset();
  };
  return (
    <>
      <header className=" bg-amber-500 p-10 text-center font-bold text-lg text-white uppercase">
        Interview Scheduled Candidates
      </header>
      <main className=" bg-gray-200 min-h-screen p-2">
        <div className="p-10 bg-white container mx-auto mt-6 rounded">
          <h1 className="font-bold">Interview Scheduled Candidates</h1>
          <div>
            <form
              action="#"
              className="mt-2 p-2 space-y-4"
              onSubmit={handleSubmit(handleSubmitFromTheServer)}
            >
              <SelectFormEL
                name="userRole"
                register={register("userRole", {
                  required: "This field is required",
                })}
                error={errors.userRole}
              />
              <InputForm
                inputLabel="Full Name"
                placeHolder="Enter a full name"
                id="fullName"
                name="userName"
                register={register("userName")}
                error={errors.userName}
              />
              <InputForm
                inputLabel="Email"
                placeHolder="Email"
                id="email"
                name="userEmail"
                register={register("userEmail")}
                error={errors.userEmail}
              />
              <TextAreaForm
                inputLabel="Address"
                placeHolder="Address"
                id="address"
                name="userAddress"
                register={register("userAddress")}
                error={errors.userAddress}
              />
              <TextAreaForm
                inputLabel="Qualification"
                placeHolder="Qualification"
                id="qualification"
                name="userQualification"
                register={register("userQualification")}
                error={errors.userQualification}
              />
              <TextAreaForm
                inputLabel="Comments"
                placeHolder="Comments"
                id="comments"
                name="userComments"
                register={register("userComments")}
                error={errors.userComments}
              />
              <Formbutton />
            </form>
          </div>
        </div>
      </main>
      <section>
        <div className="relative overflow-x-auto container mx-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.no
                </th>
                <th scope="col" className="px-6 py-3">
                  full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  job role
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  qualification
                </th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidates, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index +1} </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {candidates.userName}
                  </td>
                  <td className="px-6 py-4">{candidates.userRole} </td>
                  <td className="px-6 py-4">{candidates.userEmail} </td>
                  <td className="px-6 py-4">{candidates.userQualification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default App;
