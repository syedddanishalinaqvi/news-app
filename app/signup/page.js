'use client'

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from 'next/navigation'
import signUp from '@/firebase/auth/signup';
import Link from 'next/link'

const signup = () => {
  const [data, setData] = React.useState({ email: "", password: "" })
  const router = useRouter();
  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { result, error } = await signUp(data.email, data.password);
    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push("/signin")
  }
  return (
    <section className="d-flex align-items-center justify-content-center" style={{ height: "100vh", backgroundColor: "hsl(0, 0%, 96%)", overflow: "hidden" }}>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                The best offer <br />
                <span className="text-primary">for your business</span>
              </h1>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form >
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" htmlFor="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div>


                    <div className="form-outline mb-4">
                      <input type="email" name="email" onChange={(e) => onchange(e)} id="form3Example3" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>


                    <div className="form-outline mb-4">
                      <input type="password" name="password" onChange={(e) => onchange(e)} id="form3Example4" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>


                    <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>
                    <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link href="/"
                      class="link-danger">Sign In</Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default signup
