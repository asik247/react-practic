import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-base-100">

      {/* ===== NAVBAR ===== */}
      <div className="navbar bg-base-100 shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>Home</a></li>
              <li><a>Services</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Services</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn btn-primary">Login</a>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section className="py-16">
        <div className="grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

          {[1, 2, 3].map((item) => (
            <div key={item} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <span className="badge badge-warning badge-sm w-fit">
                  Most Popular
                </span>

                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Premium</h2>
                  <span className="text-xl">$29/mo</span>
                </div>

                <ul className="mt-4 space-y-2 text-sm">
                  <li>✅ High-resolution image generation</li>
                  <li>✅ Customizable style templates</li>
                  <li>✅ Batch processing capabilities</li>
                  <li className="line-through opacity-50">
                    ❌ Real-time collaboration
                  </li>
                </ul>

                <button className="btn btn-primary mt-6">
                  Subscribe
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ===== LOGIN FORM ===== */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in.
            </p>
          </div>

          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <input type="email" placeholder="Email" className="input input-bordered" />
              <input type="password" placeholder="Password" className="input input-bordered mt-2" />
              <button className="btn btn-primary mt-4">Login</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className=" flex justify-between item-center footer p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Terms</a>
        </nav>
      </footer>

    </div>
  );
};

export default App;
