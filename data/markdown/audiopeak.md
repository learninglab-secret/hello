# Notes!

## AudioPeak Project Launch Doc

### ft. Jad & Sophie & more!

Here, we'll keep track of all of our **progress** and *notes*.

> Our plan is to find a way to scrub LL video files for audio peaks, and turn those moments into GIFs, through a command line function. Those GIFs could then automatically be uploaded to an Express App for everyone to enjoy!

Steps:
- [ ]1. Research relevant command line plug-ins.
- [ ]2. Create the function!
- [ ]3. Create an Express app to upload resulting GIFs on.
- [ ]4. And, take notes the whole time!

---

Helpful command line links: 
- [stack overflow](https://stackoverflow.com/questions/4420208/finding-audio-peaks-in-video-files)
- [ffmpeg commands for converting btwn audio/video/images](https://www.tecmint.com/ffmpeg-commands-for-video-audio-and-image-conversion-in-linux/)
- [Sound eXchange features ](http://sox.sourceforge.net/Docs/Features) 
- [creating custom command line functions](https://codeburst.io/how-to-create-shortcut-commands-in-the-terminal-for-your-mac-9e016e25e4d7)

`print("great job researching!")`

Useful functions:
- `$ sox old.wav new.wav trim [SECOND TO START] [SECONDS DURATION]`
	- extract parts of an audio file
- `$ sox foo.wav -e stat`
	- get info for an audio file (including amplitude)
- `$ ffmpeg -i input-video.avi -vn -acodec copy output-audio.aac` 
	- extract audio from a video file
- ` $ ffmpeg -i input.mp4 -ss 01:10:27 -to 02:18:51 -c:v copy -c:a copy output.mp4`
	- example of trimming a video file
- `audio="audio.wav"stats=$(sox "$audio" -n channels 1 stats -w $width 2>&1 |\  
grep "Pk lev dB\|RMS Pk dB\|RMS Tr dB" |\  
sed 's/[^0-9.-]*//g')peak=$(head -n 1 <<< "$stats")  
rmsmax=$(head -n 2 <<< "$stats" | tail -n 1)  
rmsmin=$(tail -n 1 <<< "$stats")rmsdif=$(bc <<< "scale=3; $rmsmax - $rmsmin")  
pkmindif=$(bc <<< "scale=3; $peak - $rmsmin")echo "  
max RMS: $rmsmax  
min RMS: $rmsmin diff RMS: $rmsdif  
peak-min: $pkmindif  
"`
	- [potential finding peaks using RMS  script ](https://stackoverflow.com/questions/43415353/explanation-of-audio-stat-using-sox)
Potential process:
1. extract the audio file from the video file
2. get the stats for the audio file
3. isolate the moments with maximum amplitude (or close to it?)
	- we'll need to write a new command line program for this
4. store those seconds & trim the video file using those seconds
5. make that trimmed video file into a GIF
6. upload that GIF to the Express app

<img src="https://cdn.shopify.com/s/files/1/0080/8372/products/tattly_yay_burst_mike_lowery_00_1024x1024@2x.png?v=1566225019"  alt="yay"  style="width:250px;height:200px;">

**Contributors**
1. Jad
2. Sophie
	- 10/11/19 work done on LLV laptop
3. ~~jad's imaginary friend~~
[^1]

[^1]: https://stackoverflow.com/questions/4420208/finding-audio-peaks-in-video-files.

`print("great job researching!")`

![yay](https://cdn.shopify.com/s/files/1/0080/8372/products/tattly_yay_burst_mike_lowery_00_1024x1024@2x.png =250x250)

| Jad | Sophie |
| ----------- | ----------- |
| Class of 2020 | Class of 2021 |
| Winthrop | Cabot |

` ```  
{  
"firstName": "John",  
"lastName": "Smith",  
"age": 25  
}  
``` `
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI4OTQyOTg2MSw2MTIxMTk0ODEsMTI1MD
U4NTYyLDI2MTI2MTkzMCwzNjc2Mzc2NjgsODgzMzM1OTkyLDEx
OTY5NzI4NjksNjczOTEwMjI0LDkxNjgyMjE5LDQ3ODAxNTkyMS
wtMTk1OTY1ODM1MiwyNjQwMTY4MjgsLTE1ODk4NDgxMTcsMjIw
NDU1MTUyLC0yNjUwMTUyODAsLTIwNjIwMDg3NDJdfQ==
-->