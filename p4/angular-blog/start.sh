#!/bin/bash

ng serve --base-href / --host 0.0.0.0 &
cd ../../p3/blog-server
npm start &
cd ../../p4/angular-blog