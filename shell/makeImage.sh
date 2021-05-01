#!/bin/bash

if [ -t 1 ]; then
	target="image_dict.js"
else
	target="/dev/stdout"
fi

(
	echo -n "this.imageDict = this.imageDict || {}; this.imageDict.src = {"
	for file in "$@"; do
		file=$1
		shift
		echo -n '"'
		echo -n "$(basename $file)"
		echo -n '":"'
		echo -n 'data:image/'
		echo -n "${file#*.}"
		echo -n ';base64,'
		echo -n "$(base64 -b 0 $file)"
		echo -n '"'
		if [ "$#" -gt 0 ]; then
			echo -n ","
		fi
	done
	echo -n "};"
) > "$target"