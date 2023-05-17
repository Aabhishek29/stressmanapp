import Image from "next/image"
import React, { useState } from "react";
import Logo from './assets/loading-for-react.gif';
import Link from "next/link";

function signup(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [error, setError] = useState(false);

  const createUser = async () => {
    setShowLoading(true);
    setError(false);
    try {
      const response = await fetch('http://localhost:8081/addUsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": name,
          "emailId": email,
          "password": password,
          "phoneNumber": phoneNumber
        }),
      });

      if (response.ok) {
        const jsonData = await response.json();
        console.log(`the responce value is ${jsonData}`);
        return <Link href={'/'} />
      } else {
        console.log('Error: ' + response.status);
        setError(true);
      }
    } catch (error) {
      console.log('Error: ' + error);
      setError(true);
    }
    setShowLoading(false);
  }

    return <div>
       <img className="w-[1550px] h-[760px]"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDysZFRkrKy03LSsrKy0tLS03LSstLTcrKysrKysrLSsrKy0rKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQQD/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ay8BqcQRQAAAAAEAAABQAQKQFABAEUAAAAAAAAAAFQAURQQAABQAQAAIAAAAAAAAAAUAQVNBQARQAAAAAAAABRNARYICiCigiCgKCKIAaAVDQFBAUABIYoAgCpSgKgAoIAogKAAACiACAAKgCoAsSACiACgCBQFQAURQEAAABUAFEAUQFRQAAEUAUQBAAAAAAAAAAIAAAAYAAAAqAAAqAAACoACgCKICgAgoCGhAAADRAUAAAADQAAAAAAAAAwAAAAAAAVFARQAAAAEVADAAAAIAAAAAABoAAAAAqAaGAAABAAVAFQAFAAAAAEAAExQAoAIoBAAAAKAAAKgAAAAAAAAACoAogKIoAAJQAAKABgCKaCKgAFAUAAQBQIAAAAAFAAAAAAAVABRFAAAEARRAUIgKigIKAiwAAAAAAAAUEAAAAAAAAAAAAFQFEUAAECComqigACgaIgAKAQAAFQAIqKCAAAKACAAABQAAAUEABRABAVBUAUAVIqCIoCgAigCoAAqAiqACAAAKACCyLgKIAgigAgAugA//Z"></img>
        <h1 className="relative text-[50px] color-[#FFFFFF] mt-[-550px] ml-[660px] text-white"><b >Sign Up</b></h1>

      <form onSubmit={createUser}>
        <div>
            <label >
                <input className='input' type={'text'} autoComplete="mr.unknown" placeholder={'Enter Your Name'} onChange={e => setName(e.target.value)}/><br></br>
                <input className='input' type={'email'} autoComplete="example@text.com" placeholder={'Enter Your Email'} onChange={e => setEmail(e.target.value)}/><br></br>
                <input className='input' type={'text'} autoComplete="00000-00000" placeholder={'Enter Your Phone'} onChange={e => setPhoneNumber(e.target.value)}/><br></br>
                <input className='input' type={'password'} placeholder={'Enter Your Password'} onChange={e => setPassword(e.target.value)}/><br></br>
            </label>
            {( error && <label>Please enter valid credentials</label> )}
        </div>
        <div>
            {( !showLoading && <button className="w-[300px] mt-[20px] ml-[600px] h-[45px] rounded bg-[#ECD3F7] text-[20px] py-3 font-semibold">
              <h1 className="mt-[-5px]">  Sign Up</h1>
            </button> )}
            {( showLoading && <Image className="w-[50px] mt-[20px] ml-[720px] h-[50px]" src={Logo} alt="someting went wrong"></Image>)}
        </div>
      </form>

    </div>

}
export default signup