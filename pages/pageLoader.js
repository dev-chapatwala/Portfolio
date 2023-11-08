import Styles from "../styles/pageLoader.module.css";

const pageLoader = () => {
  const className1 = `${Styles.cssload_inner} ${Styles.cssload_one}`;
  const className2 = `${Styles.cssload_inner} ${Styles.cssload_two}`;
  const className3 = `${Styles.cssload_inner} ${Styles.cssload_three}`;
  return (
    <>
        <div className={Styles.reloader}>
            
      <div class={Styles.preloader_orbit_loading}>
        <div className={className1}></div>
        <div class={className2}></div>
        <div class={className3}></div>
      </div>
      </div>
    </>
  );
};

export default pageLoader;
