import Footer from './Footer';
import NavbarComp from './NavbarComp';
import Main from './Main';
import Header from './Header';
import Section from './Section';
import Showcase from './Showcase';

const Home = () => {
    const courses = [
        {
            id: 1,
            title: 'Beginner Javascript',
            description: `Meatloaf shank short loin landjaeger corned beef. Sirloin shankle jerky ham, 
            pork tenderloin short loin pig. Bacon filet mignon pig swine ham drumstick. Ball tip jerky 
            venison t-bone short ribs drumstick pancetta pork. Jerky tenderloin porchetta shankle, 
            venison beef meatloaf capicola salami ground round ribeye landjaeger shoulder t-bone. Beef ribs hamburger 
            filet mignon venison frankfurter cow jerky pork flank bresaola sausage. Buffalo meatball cupim porchetta venison.`
        },
        {
            id: 2,
            title: 'React for Web',
            description: `Spare ribs burgdoggen pancetta strip steak cow leberkas tenderloin tongue. 
            Chislic rump shoulder, picanha flank chicken porchetta bresaola chuck buffalo. 
            Short ribs biltong ribeye burgdoggen leberkas strip steak, turducken buffalo jowl. 
            Boudin prosciutto doner, short loin venison shankle meatball tail. 
            Pork chop cupim pig pork belly. Porchetta short ribs doner jerky swine, andouille flank prosciutto landjaeger.`
        },
        {
            id: 3,
            title: 'Nextjs for Developers',
            description: `Tenderloin porchetta pork loin meatball boudin short ribs fatback shoulder. 
            Tenderloin brisket sausage bacon pig, sirloin biltong ham cow burgdoggen beef buffalo andouille. 
            Jerky frankfurter biltong jowl alcatra. Picanha pancetta shoulder pig frankfurter. 
            Sausage frankfurter leberkas tri-tip pastrami shankle, ham hock brisket swin`
        },
        {
            id: 4,
            title: 'Database Management',
            description: `Tenderloin porchetta pork loin meatball boudin short ribs fatback shoulder. 
            Tenderloin brisket sausage bacon pig, sirloin biltong ham cow burgdoggen beef buffalo andouille. 
            Jerky frankfurter biltong jowl alcatra. 
            Picanha pancetta shoulder pig frankfurter. Sausage frankfurter leberkas tri-tip pastrami shankle, ham hock brisket swin`
        },

        {
            id: 4,
            title: 'Database Management',
            description: `Tenderloin porchetta pork loin meatball boudin short ribs fatback shoulder. 
            Tenderloin brisket sausage bacon pig, sirloin biltong ham cow burgdoggen beef buffalo andouille. 
            Jerky frankfurter biltong jowl alcatra. 
            Picanha pancetta shoulder pig frankfurter. Sausage frankfurter leberkas tri-tip pastrami shankle, ham hock brisket swin`
        }
    ];




    return (
        <div>
            <NavbarComp />
            <Header />
            <Main />
            <Section />
            <Showcase data={courses}/>
            <Footer />
        </div>
    );
}
export default Home;