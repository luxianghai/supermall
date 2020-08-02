module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        '@assets':'@/assets',
        '@img':'@assets/img',
        '@components':'@/components',
        '@common': '@/common',
        '@store':'@/store',
        '@views':'@/views',
        '@network':'@/network'
      }
    }
  }
}
