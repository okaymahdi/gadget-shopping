export const Banner = () => {
  return (
    <div
      className="hero min-h-screen w-full mx-auto"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?t=st=1731514084~exp=1731517684~hmac=cc346072a2807c9e3eae080616430f7eafc399102d453e381806fe0774bb0f1f&w=900)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Gadget Shop</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}
