'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import signIn from '@/firebase/auth/signin';


const signin = () => {
    const [data, setData] = React.useState({ email: "", password: "" });
  const router = useRouter();
  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { result, error } = await signIn(data.email, data.password);
    if (error) {
      return alert("User don't exist");
    }
    console.log(result);
    localStorage.setItem('user',result.user.uid)
    return router.push("/news")
  }
    return (
        <section className="d-flex align-items-center justify-content-center" style={{ height: "100vh", backgroundColor: "hsl(0, 0%, 96%)", overflow: "hidden" }}>
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="img-fluid" alt="Sample image" />
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form class="my-5">
                            <div class="form-outline mb-4">
                                <input type="email" name="email" onChange={onchange} id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                                <label class="form-label" for="form3Example3">Email address</label>
                            </div>


                            <div class="form-outline mb-3">
                                <input type="password" name="password" onChange={onchange} id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label class="form-label" for="form3Example4">Password</label>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">

                                <div class="form-check mb-0">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label class="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" onClick={(e)=>{handleSubmit(e)}} class="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link href="/signup"
                                    class="link-danger">Register</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default signin
