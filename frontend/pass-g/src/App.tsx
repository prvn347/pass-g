import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { userInfo } from 'os'
import { Input } from "@/components/ui/input"
import copy from "copy-to-clipboard";
// import { copy } from 'stylis'
import { useToast } from "@/components/ui/use-toast"
import RootLayout from './components/ui/layout'





function App() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<string>("")
  const [length,setLength] = useState<number>(0)
  const [passChar,setPassChar] = useState<string>()
const [passNum,setPassNum] = useState<number>()
const { toast } = useToast()
useEffect(() => {
  // Dynamically adjust the width of the input field based on its content
  if (passwordRef.current) {
    passwordRef.current.style.width = `${passwordRef.current.scrollWidth}px`;
  }
}, [password]);
const [passSpacialChar,setPassSpacialChar] = useState<string>()
function handleClick (length: number){
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
  let result = '';
const uniquePass = new Set()
while(result.length< length){
  const randomIndex = Math.floor(Math.random() * characters.length)
  const randomChar = characters.charAt(randomIndex)
  if(!uniquePass.has(randomChar)){
    result += randomChar;
    uniquePass.add(randomChar)
  }

}
setPassword(result)
}
// const [copyText, setCopyText] = useState("");
 
// const handleCopyText = (e:any) => {
//     setCopyText(e.target.value);
// };

const copyToClipboard = () => {
    copy(password);
    toast({
      title: "Password copied!"

    })
};
  return (<div className=' h-screen bg-blue-950 flex flex-col items-center justify-center'>
    <div className='py-8'>
      <h2 className=' font-mono font-bold text-3xl text-center text-white'>Generate secure, random passwords <br /> to stay safe online.</h2>
    </div>
      <div className='flex justify-center pb-6'>
    <Input className=' w-40 font-mono font-semibold text-lg'  placeholder='Enter length' type='number' required onChange={(e)=> {
      setLength(parseInt(e.target.value))
    }}/>
</div>
<div className=' pb-10'>
    <Button className='  ' onClick={() => handleClick(length)} >Generate</Button>
</div>
<div>
  <label htmlFor="clipboard" className=' text-white font-semibold font-mono' >Generated Password</label>
<Input   ref={passwordRef} value={password}  className=" w-auto p-8 font-mono text-blue-700 text-lg font-bold mb-5"   readOnly  />
<Button onClick={copyToClipboard} >copy</Button>
<RootLayout/>
</div>
</div>
    
  )
}



 

export default App
