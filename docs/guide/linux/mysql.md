  - [] TODO

  559  2022-08-02 11:10:38 root rpm -qa | grep mysql
  560  2022-08-02 11:11:48 root wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
  561  2022-08-02 11:11:57 root rpm -ivh mysql-community-release-el7-5.noarch.rpm
  562  2022-08-02 11:12:07 root yum update
  563  2022-08-02 11:16:47 root yum install mysql-server
  564  2022-08-02 14:20:22 root mysql
  565  2022-08-02 14:20:48 root rpm -qa | grep mysql
  566  2022-08-02 14:21:20 root chown -R mysql:mysql /var/lib/mysql/
  567  2022-08-02 14:21:32 root mysqld --initialize
  568  2022-08-02 14:21:58 root systemctl start mysqld
  569  2022-08-02 14:22:12 root systemctl status mysqld
  570  2022-08-02 14:22:43 root mysqladmin --version
  571  2022-08-02 14:22:48 root mysql
  572  2022-08-02 14:23:48 root mysqladmin -u root password zhaoshaojin180603
  573  2022-08-02 14:24:50 root mysql -u root -p
  574  2022-08-02 14:40:30 root yum list
  575  2022-08-02 14:41:45 root systemctl status mysqld
  576  2022-08-02 14:42:04 root mysqladmin --version
  577  2022-08-02 14:42:09 root history


安装MySQL

