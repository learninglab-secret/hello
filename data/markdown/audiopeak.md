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
- [creating custom command line functions](https://medium.com/devnetwork/how-to-create-your-own-custom-terminal-commands-c5008782a78e)

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
eyJoaXN0b3J5IjpbMjYxMjYxOTMwLDM2NzYzNzY2OCw4ODMzMz
U5OTIsMTE5Njk3Mjg2OSw2NzM5MTAyMjQsOTE2ODIyMTksNDc4
MDE1OTIxLC0xOTU5NjU4MzUyLDI2NDAxNjgyOCwtMTU4OTg0OD
ExNywyMjA0NTUxNTIsLTI2NTAxNTI4MCwtMjA2MjAwODc0Ml19

-->