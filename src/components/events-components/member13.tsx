import Image from 'next/image'
import mypic from '/Users/mukta/sachacks update/sachacks-2022/public/assets/member13.png'
const Team13: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="230px"
      height="242px"
    />
  )}
  
export default Team13;
  