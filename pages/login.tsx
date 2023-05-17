
import  Link from "next/link"
function Login(){
    return <div>
       <img className="w-[1550px] h-[760px]"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDysZFRkrKy03LSsrKy0tLS03LSstLTcrKysrKysrLSsrKy0rKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQQD/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ay8BqcQRQAAAAAEAAABQAQKQFABAEUAAAAAAAAAAFQAURQQAABQAQAAIAAAAAAAAAAUAQVNBQARQAAAAAAAABRNARYICiCigiCgKCKIAaAVDQFBAUABIYoAgCpSgKgAoIAogKAAACiACAAKgCoAsSACiACgCBQFQAURQEAAABUAFEAUQFRQAAEUAUQBAAAAAAAAAAIAAAAYAAAAqAAAqAAACoACgCKICgAgoCGhAAADRAUAAAADQAAAAAAAAAwAAAAAAAVFARQAAAAEVADAAAAIAAAAAABoAAAAAqAaGAAABAAVAFQAFAAAAAEAAExQAoAIoBAAAAKAAAKgAAAAAAAAACoAogKIoAAJQAAKABgCKaCKgAFAUAAQBQIAAAAAFAAAAAAAVABRFAAAEARRAUIgKigIKAiwAAAAAAAAUEAAAAAAAAAAAAFQFEUAAECComqigACgaIgAKAQAAFQAIqKCAAAKACAAABQAAAUEABRABAVBUAUAVIqCIoCgAigCoAAqAiqACAAAKACCyLgKIAgigAgAugA//Z"></img>
        <h1 className="relative text-[50px]  color-[#FFFFFF] mt-[-550px] ml-[680px] text-white"><b >Login</b></h1>

      <form>
        <div className="bg-[#EFE6F0]">
            <label >
                <input className="input bg-[#EFE6F0]" type="email" placeholder="Email"/><br></br>
                <input className="input bg-[#EFE6F0]" type="passsword" placeholder="Password"/>
            </label>
        </div>
        <div>
            <Link href="./home">
            <button className="w-[300px] mt-[90px] ml-[600px] h-[45px] rounded bg-[#EFE6F0] text-[20px] py-3 font-semibold">
              <h1 className="mt-[-5px]">  Log In</h1>
            </button>
      </Link>


        </div>
      </form>

    </div>

}
export default Login