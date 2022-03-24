/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,Image,AspectImage  } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg, {SVGLogo} from 'components/icons/logo';
 import Log from 'images/logo.png';
export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
       {/* <SVGLogo></SVGLogo>
      <img src=""></img> */}
      <Image src={Log} alt="illustration" />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    img:{
      width: [128, null, null],  
      height: 'auto'  
    },
    svg: {
      height: 'auto',
      width: [128, null, null],
    },
  },
};
