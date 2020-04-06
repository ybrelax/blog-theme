module.exports = themeConfig => {
    /**
     * set your default theme configuration
     */
    console.log('themeConfig:', themeConfig);

    const {comments, lang, defaultPages} = themeConfig;

    const config = {
        name: 'vuepress-theme-relax',

     
        extendPageData(pageCtx) {
            console.log('牛逼:', pageCtx);
        }
    }
   

    return config;
}