import Banner from '@/components/Banner';
import { render, screen } from '@testing-library/react'

describe('Banner', () => {

    const Imageurl = 'https://unsplash.com/es/fotos/U7Hq8kN8apM'

    it('should render alt the banner component', () => {
        render(<Banner alt="test" src={Imageurl} src2={Imageurl} />)
        const testImage = document.querySelector("img") as HTMLImageElement;
        expect(testImage.alt).toContain("test");
    })

    it('should render src the banner component', () => {
        render(<Banner alt="test" src={Imageurl} src2={Imageurl} />)
        const testImage = document.querySelector("img") as HTMLImageElement;
        expect(testImage.srcset).toContain('https');

    })

})
    
