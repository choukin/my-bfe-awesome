module.exports = {
  apps : [{
    script:"serve",
    env:{
        PM2_SERVE_PATH:'.',
        PM2_SERVE_PORT:8080,
        PM2_SERVE_SPA: true,
        PM2_SERVE_HOMEPAGE:'./index.html',
        PM2_SERVE_BASIC_AUTH: 'true',
        PM2_SERVE_BASIC_AUTH_USERNAME: 'example-login',
        PM2_SERVE_BASIC_AUTH_PASSWORD: 'example-password'        
    }
  }]
}


