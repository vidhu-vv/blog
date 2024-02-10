---
title: The Incident...
description: That time I almost bricked my computer...
date: '2024-2-10'
published: true
---

# 1. The Beginning

So, this all started in a moment of vulnerability. I was stuck at home, bored out of my mind, and missing a game to play. Recently I had been watching a lot of Valorant on YouTube (mostly TenZ).
This all culminated in the incredible decision to start installing Valorant. Great idea, right? Yeah, no. The actual installation was pretty easy. I went to the downloads page on Valorant's website and clicked the big red button that said download.

![Valorant Download Page](/blog/val_download.png)

Pretty hard to miss.

Anyway, I had already heard many horror stories about the Valorant anti-cheat, and its scary "kernel-level access," but how bad could it be? (Very bad) So I continued with the download, everything going as smoothly as can be. 

Now, to understand the next part of the story, you need to know a little bit of background about my setup. Ever since 2022, I have been using some form of Linux on my main desktop at all times, whether it be Pop!OS, Arch Linux, or some other random iso that I found off the internet. However, a few months back, I dual-booted Windows 11 with Linux, which basically means that I split my hard drive in half, and now half of it was Windows 11 and the other half was whatever Linux distribution I had running at the time. The critical part about this was that to switch between operating systems, I would need to restart, go into the BIOS (basic input output system), and click the distribution I had. Now, the BIOS is basically the most important software in any computer literally ever. It is the only thing that allows you to interact with your computer (e.g. press buttons, see things on the display, open up literally anything). The thing is, after years of messing with the BIOS, I got a little bit confident. I mean, I installed 2 operating systems, and I go into the BIOS on a daily basis to switch between them.

# 2. Uh Oh

Back to installing Valorant. I clicked the play button, wriggling in my chair in anticipation. A popup. "You need to restart your computer to play Valorant." Okay. I can do that. I then restarted my computer to let the Vanguard anti-cheat take kernel-level access to my Windows. Probably not a great idea in hindsight. I boot up my computer into Windows (Valorant doesn't work on Linux) and find exactly what I've been looking for. The play button. I click it, ready to play once, and then never touch the game again. It opens up perfectly fine and puts me into the loading screen. Then, another popup. This time not as good. 

![Vanguard Error 9003](/blog/van9003.png)

Despite these setbacks, I was intent on playing this game. I had already invested 20 minutes and 33 Gigabytes of storage on it! Fortunately, I knew the solution to this. It was a 3 step process.
1. Go into the BIOS (uh oh)
2. Turn on secure boot
3. boot back into Windows and play Valorant :D

Easy enough.

# 3. The Beginning (of the end) 

I reboot into the BIOS, its orange and black glare staring me in the eyes, daring me to make a mistake. *I didn't listen*. I went over to the boot menu. Did a little bit of tinkering to get the ability to turn on secure boot. Created a PK key (still don't know what that does) and flipped that ever-so-enticing switch. 

## Secure Boot: Enabled

I navigated to the save and exit panel before realizing, "Hey, I did this all on my own, this is pretty cool, I didn't even look up any tutorials to do this."

I click the save and exit button and boot into Windows, waiting for my background to pop into existence like it always does.

And nothing happened.

I waited and waited, but the operating system wouldn't boot. The only thing showing up was a black screen. It was almost like I was in limbo, unable to go to the operating system, but also unable to go back to the BIOS. Anyway, that shouldn't be a problem, I've hit crashes before, a quick restart should do the trick. I click the power button on the top of my computer and the the components inside my 3-year-old desktop sigh to a halt, the yellow lights fading down to black. I hit the power button again, and everything seems to be working fine. The fans spun to life, the previously faded lights brightened up to their normal yellow glare. But as I look up at my monitors, my heart sinks. A black screen. But this time I come to a horrible realization. This isn't a black screen that is coming from my computer. This is a black screen coming from my monitor. Meaning that when I hit that dreaded save and exit button 3 minutes ago, I unwittingly just made my computer unable to do anything, including show up to my display. And now, even when I powered on my computer, I couldn't see a single pixel.

# 4. This is where everything goes wrong

Now I'm not gonna lie, I am not proud of my next few minutes.

I panicked.

I panicked so hard.

Honestly, who wouldn't? I had just broken my computer, a very expensive one mind you, and had done it in the most spectacular fashion possible.

Now, the good thing was that at least I knew the problem. Since all of my issues had started when I turned on secure boot, most likely, I fried the BIOS. Or at least I damaged it to the point where it would no longer take any inputs or show up through my monitor. The bad thing is that I had no idea how to fix it. And since I am completely unable to put any inputs into the system, or receive any feedback from the system, I was left with only one option. Getting into the hardware.

I ripped the cords from the back of the PC, picked it up with my monitor, a screwdriver, and my phone to the wooden floor outside to save the PC from static, all while cursing myself under my breath the whole way.

While carefully removing the cover from the computer like a brain surgeon on their first patient of the day, I opened up my only source of assistance in these troubling times: Google. Looking up my problem yielded little support. I found multiple Reddit posts warning users to be careful enabling secure boot on their motherboard, as for some people, doing this **BRICKED THEIR WHOLE PC**. Good job Vidhu, nice going with that "Hey, I did this all on my own, this is pretty cool, I didn't even look up any tutorials to do this."

Anyway, I still need to fix this problem that I created for myself. So I did some more digging around in the depths of Google and came across my saviour. I came across a Linus Tech Tips forum post detailing the exact problem that I had encountered with a multitude of solutions, each with varying levels of success from other users.

Over the next few hours, I tried anything that I could to bring life back to my computer. I took out the battery from the motherboard, I tried re-flashing the BIOS (and ended up corrupting a USB drive in the process), and I even thought about giving up and getting a new motherboard. I had resigned myself to the loss of my computer and was ready to pack it up and work on my school-issued Chromebook for the coming weeks or months. 

But I had one last idea.

# 5. Comeback Time

Even with all of the solutions that I had tried so far, none of them showed any signs of display. In a desperate attempt to have some sort of feedback to my computer, I completely removed my graphics card from the motherboard, grabbed an HDMI cable that I had lying around, and plugged the monitor straight into the motherboard. My plan was to try and remove the SSD that had Valorant on it and hope that somehow, someway, the BIOS would sort itself out on its own, and maybe the graphics card was in the way of that.

But that didn't happen.

Planning to take out the SSD, I held the power button to release any pent-up static that could have been loitering around in the system. Unfortunately, I forgot to turn off the power supply, so the computer spun to life for the 1,000,001st time that day.

And something popped up on the monitor.

I freaked out, dropping my screwdriver on the floor and running over to the monitor to get a better look at whatever was on the screen. It seemed to be a completely static-y screen, with a small part of orange in the top-right corner. It didn't seem like a lot, but it was progress. 

I restarted a few more times, and randomly, I got this error.

<img src="/blog/secureboot.jpg" alt="secure boot error" width="200"/>
(this is not my photo, I just found this online)

No matter what I did, I couldn't get out of this error. Even if I clicked "OK" the error would just reappear. But it was still progress, so I had the motivation to keep trying. I turned off the computer, took out the CMOS battery (motherboard battery), and waited for a minute, hoping that the BIOS would reset if I just took out the battery. I then put the battery back into its slot, clicked the power button, and finally...

booted into the BIOS.

# 6. Relief

As soon as I booted into the BIOS, I knew I would only have one chance. If I messed something up in here while trying to fix it, I wouldn't know how long it would be before I would be able to get into the BIOS again. The original attempt to get into the BIOS with the error only worked once out of every 10 tries and took almost 3 hours to get to the true BIOS. 

I navigated to the secure boot settings, making sure to not hit anything that could ruin my computer even more. I reset the BIOS keys to factory settings and finally switched back that option which caused me all of this pain.

## Secure Boot: Disabled

I saved and exited, holding my breath to see what would happen next.

AND I BOOTED INTO WINDOWS.

Smiling ear to ear, I logged into my account to make sure everything still worked. Ready to bring my computer back to my room and completely uninstall Valorant, I turned off the computer one more time, ready to put the graphics card back into the PCIe slot. I opened the slot, slid the card into it, and heard the two clicks that meant that the card was secure. I turned on my computer, but the screen stayed black.

# 7. Worry

At this point, I was ready to just give up and admit that somehow the BIOS fried my graphics card. I plugged the HDMI cable into the motherboard, ready to use the integrated graphics card and troubleshoot. I figured that the problem was likely a small one, most likely that the drivers were broken and I would need to reinstall them. Opening up GeForce Experience (my driver software), I didn't see any already installed drivers. That gave me a slight pulse of relief, knowing that I was probably on the right path. I installed the latest software, leaving the computer to do its thing. I came back 5 minutes later to see an error.

That's fine, I error all the time, it's just a little bit inconvenient.

I try again.

It errors again.

Now I'm a little bit worried. Most of the time that this fails, it would just work the next time. I tried to go to Nvidia's website to install the drivers manually, but when I tried executing the file, my heart dropped for what felt like the 100th time that day. It said:


### No Nvidia Graphics Card detected in this computer

I opened up the Nvidia Control Panel, hoping that it was some sort of cruel joke that my computer was playing on me. Before even getting into the control panel, I was booted from the software with the error that appeared just 10 seconds prior in the manual driver install.

Panicking, I looked inside the PCIe slot, checking if I had inserted the card correctly, and everything seemed fine. I shifted my gaze to the top of the graphics card, just to check if I could see the damage that was done to it, and completely by accident, my eyes rested upon a set of 8 pin-holes near the bottom of the card. Slightly to the right lay a cable. A cable with 8 pins.

I forgot to plug in the graphics card.

After a few minutes of contemplating my life choices, I plugged the cable into the graphics card and switched my monitor to DisplayPort.

AND IT FINALLY WORKED. 

I didn't even celebrate. I just turned off the computer, dragged all of the scattered computer parts back into my room, and set up the computer where it lies today.

# 8. And the moral of the story is...

Don't mess with the BIOS if you don't know what you are doing. Luckily, everything worked out. I uninstalled Valorant, installed CS2 (which works without messing with anything), and played my one game before uninstalling that as well.

The end. Hopefully.

~VV
