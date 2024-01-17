
import { Inter ,  Lusitana, Open_Sans, Tektur} from 'next/font/google';


 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
    style: ['normal'],
});
export const open_sans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
    style: ['italic']
})

export const textur = Tektur({
    subsets: ['latin'],
})
