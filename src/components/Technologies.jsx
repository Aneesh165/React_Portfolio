import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs, TbBrandNodejs} from 'react-icons/tb'
import {SiMongodb, SiTailwindcss} from 'react-icons/si'
import {DiBootstrap, DiMysql, DiRedis} from 'react-icons/di'
import {FaLinux, FaNodeJs} from 'react-icons/fa'
import {BiLogoPostgresql} from 'react-icons/bi'

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='p-4'>
                <FaLinux  className='text-7xl'/>
            </div>
            <div className='p-4'>
                <SiMongodb  className='text-7xl text-cyan-500'/>
            </div>
            <div className='p-4'>
                <SiTailwindcss className='text-7xl text-[#38bdf8]'/>
            </div>
            <div className='p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>
            <div className='p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-700'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies