class RegConst {
    /**手机表达式 */
    public static TEL_REG: RegExp = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    /** html样式 */
    public static HTML_REG: RegExp = /<\/?.+?\/?>/ig;
    /** 全部空格 */
    public static EMPTY_ALL_REG: RegExp = /\s+/g;
}
