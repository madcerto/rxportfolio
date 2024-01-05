export default function Header() {
  return (
    /* TODO: build sm version*/
    <div className="basis-96 p-8">
      <p className="font-noto font-bold text-2xl">Sam Gregg Photography</p>
    
      <div class="font-lato text-[#6b747a]">
        <p>
          <strong>Sam Gregg</strong> is a current Film Student, as well as a
          freelance photographer, video editor, and photojournalist. 
          If you have any questions about my work, or would like to 
          work together, please reach out to me via email: 
           <a className="font-bold" href="mailto:sam@quackcore.com">sam@quackcore.com</a>.
        </p>
        <ul>
          <li>Album 1</li>
          <li>Album 2</li>
          <li>Album 3</li>
        </ul>
      </div>
    </div>
  )
}
