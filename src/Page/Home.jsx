import Container from "../Components/Layout/Ui/Container";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col gap-5 md:flex-row my-20">
        <div className="flex-[1] ">
          <h2 className="text-7xl mb-5 font-bold ">Quality Cleaning <br /> <span className="text-green-700 ">For Your Home</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odio
            alias dolor similique quam excepturi?
          </p>
          <div className="my-5">
            <button className="btn mt-5 mr-2 btn-accent">Book Sercvice</button>
            <button className="btn ">Read More</button>
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap5">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>

              <p>Rated By 5 out of 5 by our CLients</p>
            </div>
          </div>
        </div>
        <div className="flex-[1] rounded-2xl overflow-hidden">
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
