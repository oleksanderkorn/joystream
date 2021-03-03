module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/joystream/' : '/',
    devServer: {
        allowedHosts: [
            'joystream.herokuapp.com',
            'oleksanderkorn.github.io'
        ]
    }
}