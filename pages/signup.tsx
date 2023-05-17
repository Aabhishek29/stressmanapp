import Image from "next/image"

function signup(){

  const createUser = () => {
    
  }

    return <div>
       <img className="w-[1550px] h-[760px]"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDysZFRkrKy03LSsrKy0tLS03LSstLTcrKysrKysrLSsrKy0rKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQQD/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ay8BqcQRQAAAAAEAAABQAQKQFABAEUAAAAAAAAAAFQAURQQAABQAQAAIAAAAAAAAAAUAQVNBQARQAAAAAAAABRNARYICiCigiCgKCKIAaAVDQFBAUABIYoAgCpSgKgAoIAogKAAACiACAAKgCoAsSACiACgCBQFQAURQEAAABUAFEAUQFRQAAEUAUQBAAAAAAAAAAIAAAAYAAAAqAAAqAAACoACgCKICgAgoCGhAAADRAUAAAADQAAAAAAAAAwAAAAAAAVFARQAAAAEVADAAAAIAAAAAABoAAAAAqAaGAAABAAVAFQAFAAAAAEAAExQAoAIoBAAAAKAAAKgAAAAAAAAACoAogKIoAAJQAAKABgCKaCKgAFAUAAQBQIAAAAAFAAAAAAAVABRFAAAEARRAUIgKigIKAiwAAAAAAAAUEAAAAAAAAAAAAFQFEUAAECComqigACgaIgAKAQAAFQAIqKCAAAKACAAABQAAAUEABRABAVBUAUAVIqCIoCgAigCoAAqAiqACAAAKACCyLgKIAgigAgAugA//Z"></img>
        <h1 className="relative text-[50px] color-[#FFFFFF] mt-[-550px] ml-[660px] text-white"><b >Sign Up</b></h1>

      <form onSubmit={createUser}>
        <div>
            <label >
                <input className="input" type="name" placeholder="Name"/><br></br>
                <input className="input" type="number" placeholder="Contact No"/><br></br>
                <input className="input" type="email" placeholder="Email"/><br></br>
                <input className="input" type="passsword" placeholder="Password"/>
            </label>
        </div>
        <div>
            <button className="w-[300px] mt-[20px] ml-[600px] h-[45px] rounded bg-[#ECD3F7] text-[20px] py-3 font-semibold">
              <h1 className="mt-[-5px]">  Sign Up</h1>
            </button>
        </div>
      </form>

    </div>

}
export default signup