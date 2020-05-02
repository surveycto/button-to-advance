# Keyboard start

![Keyboard start](extras/extra-buttons.png)

## Description

Use this field plug-in to move to the next field by pressing a keyboard key. By default, that key is the spacebar, but it can be customized with the parameter.

This field has no value until that key is pressed. When the key is pressed, this field is given a value of '1'. So, if it is fine for the respondent to use the arrows to move to the next field, make the *required* value of the field blank or `no`. If the respondent must use the specified key, maek the *required* value of the field `yes`.

[![Download now](extras/readme-images/download-button.png)](https://github.com/surveycto/timed-keyboard-categories/raw/master/timed-keyboard-categories.fieldplugin.zip)

## Default SurveyCTO feature support

| Feature / Property | Support |
| --- | --- |
| Supported field type(s) | `text`|
| Default values | No |
| Custom constraint message | Yes |
| Custom required message | Yes |
| Read only | No |
| media:image | Yes |
| media:audio | Yes |
| media:video | Yes |
| `number` appearance | No |
| `numbers_decimal` appearance | No |
| `numbers_phone` appearance | No |
| `show_formatted` appearance | No |

## How to use

**To use this field plug-in as-is**, just download the [keyboard-start.fieldplugin.zip](https://github.com/surveycto/keyboard-start/raw/master/keyboard-start.fieldplugin.zip) file from this repo, and attach it to your form.

To create your own field plug-in using this as a template, follow these steps:

1. Fork this repo
1. Make changes to the files in the `source` directory.

    * **Note:** be sure to update the `manifest.json` file as well.

1. Zip the updated contents of the `source` directory.
1. Rename the .zip file to *yourpluginname*.fieldplugin.zip (replace *yourpluginname* with the name you want to use for your field plug-in).
1. You may then attach your new .fieldplugin.zip file to your form as normal.

## Parameters

|Name|Description|Default|
|---|---|---|
|`key`|Key to press to advance to the next field.|(spacebar)|

The value of `key` can be any key on the keyboard. If this parameter is not specified, then the key to advance will be the spacebar.

Important: If the key is a letter, make sure it is lowercase.

## More resources

* **Test form**  
You can test this with the test form for [timed-keyboard-categories](https://github.com/surveycto/timed-keyboard-categories).

* **Developer documentation**  
More instructions for developing and using field plug-ins can be found here: [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)
