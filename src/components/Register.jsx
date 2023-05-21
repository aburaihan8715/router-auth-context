import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUserUsingEmailAndPassword, setUser, setLoading, signInUsingGoogle, signInUsingGithub, signInUsingFacebook, setError, error } =
    useContext(UserContext);
  const navigate = useNavigate();

  // register handler
  const registerHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Password should be minimum 6 character!");
      return;
    }
    // console.log(name, email, password);
    form.reset();

    // create user using email and password
    createUserUsingEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        alert("User has been created successfully!!");
        setError("")
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // console.log(errorMessage);
      });
  };

  // register using google
  const registerUsingGoogleHandler = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        toast.success("User has been created successfully!!", {
          position: "top-center",
        });
        setError("")
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);

        // console.log(errorMessage);
      });
  };

  // register using github
  const registerUsingGithubHandler = () => {
    signInUsingGithub()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        toast.success("User has been created successfully!!", {
          position: "top-center",
        });
        setError("")
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);

        // console.log(errorMessage);
      });
  };

  // register using facebook
  const registerUsingFacebookHandler = () => {
    signInUsingFacebook()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        toast.success("User has been created successfully!!", {
          position: "top-center",
        });
        setError("")
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);

        // console.log(errorMessage);
      });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-gray-700 text-center mb-4 uppercase">register</h1>
      <div className="text-center mb-2">
        <small>
          Already user?
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
          here.
        </small>
      </div>
      <form onSubmit={registerHandler}>
        <div className="space-y-3 md:w-1/2 mx-auto">
          <div className="">
            <input className="border rounded p-2 w-full" type="text" name="name" id="name" placeholder="Enter name" required />
          </div>
          <div className="">
            <input className="border rounded p-2 w-full" type="email" name="email" id="email" placeholder="Enter email" required />
          </div>
          <div className="">
            <input className="border rounded p-2 w-full" type="password" name="password" id="password" placeholder="Enter password" required />
          </div>

          <div className="text-right">
            <button className="btn btn-primary w-full" type="submit">
              Register
            </button>
          </div>
          {/* error message */}
          {error && (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}
        </div>
      </form>
      <p className="text-center text-2xl mt-4">---------------or---------------</p>
      <div className="text-center mt-8">
        <button onClick={registerUsingGoogleHandler} className="btn btn-primary">
          Register with google
        </button>
        <ToastContainer />
      </div>
      <div className="text-center mt-4">
        <button onClick={registerUsingGithubHandler} className="btn btn-primary">
          Register with github
        </button>
        <ToastContainer />
      </div>
      <div className="text-center mt-4 mb-2">
        <button onClick={registerUsingFacebookHandler} className="btn btn-primary">
          Register with facebook
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
