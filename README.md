# do-you-know-me

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Redis

Start redis `redis-server /usr/local/etc/redis.conf`

### Database migrations

+ [Db-migration](https://db-migrate.readthedocs.io/en/latest/)

+ Create new migration: db-migrate create {name} --sql-file
+ Migrate: npx db-migrate up -e {dev|prod}
+ Rollback: npx db-migrate down -e {dev|prod}

