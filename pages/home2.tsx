import  Link from "next/link"
function Home2(){
    return <div     className="bg-[#000000]">
      <Link href="./login">
      <h1 className="text-[#FFFFFF]">login </h1>
      </Link>
      <div
      className="bg-[#000000]"
    />
       <img className="w-[1550px] h-[660px]"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEhUPDxIVFRUVFRUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFw8NFy0lHSUtLS0tLSs3LS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tNy0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AM7AAAFABAAUAEABQAAoAAAACAAoAIACgAgAKACAAoAIIoAUAABQAQAFABAAAAUKAgAAAKACAAAAoAIACgAgAKACCKAFAAAUAEABQAAAQAFCgIACgAgAKACAAoAIACgAgAKACAGCgAgAAAAAKUAQAAAAAAAAAAAAoAAAEAAAAAAAFABAAACgACgAAAAAAAAAAFEABQAQAFABAAAAAAAAAAUAEAS0FAoAAAAFAFAoIACgAgBQAAAAABQKCAAAAAAoAIACgAgAAAAAAAAAKACAAAAoAIACgAgAKACAAoAIAAAQAAUAEDAAAAAFABAAUAEABQAAAAAAAAAAKCAAoAIACgAgAKACCKAFAUAEAAABQAQAAAAKAAAAAAAAAoAIAAFAAAEUBQAQS1TQCgAAKACAAoAIAAAChQEABQAQAFABAAUAEABQAQAFABCgYKACAAAAAAFAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAP/Z"></img>
        <h1 className="text-[50px] ml-[50px] mt-[-650px] ">
        <b className="text-[#A4A9A4]">Stressi</b>
        <b className="text-[#FFFFFF]">Bye</b>
      </h1>
        
      <p className="mt-[200px] ml-[250px]"><b className="text-[60px] text-[#FFFFFF] mt-[200px]">Mental Health & Inner Development</b></p>
      <p className="ml-[430px]"><b className="text-[30px] text-[#FFFFFF]">Learn & Connect. Grow. Make a difference.</b></p>
      <p className="ml-[190px]"><b className="text-[23px] text-[#FFFFFF]">Access free exercises, courses, challenges, meditations and connection with peers via chat, audio & video.</b></p>


      <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm bg-[#EFE6F0] ">
            <img
              src="data:image/png;base64,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"
              className="w-[400px] h-[200px]"
            ></img>

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 ml-[70px]">
                In-depth Reporting
              </div>
              <p className="ml-[10px]">
                We deliver quarterly in-depth reports on observations, learnings
                and recommendations for overall organization change &
                improvement.
              </p>
            </div>
          </div>
       
    </div>
    </div>

}
export default Home2