#!/bin/bash
name=mengqi
prodir=/home/gongfu/third/nginx/html/
date_dir=${name}_`date +%Y_%m_%d`
echo ${date_dir}
if [ ! -d ${prodir}${name} ]
    then
	mkdir ${prodir}${name}
    	echo 'mkdir'${name}
fi
cp -r ${prodir}${name} ${prodir}backups/${date_dir}
echo 'BACKUPS SUCCESS'
rm -rf ${prodir}${name}/*
cp -r ./dist/* ${prodir}${name}
echo 'UPDATE SUCCESS'
