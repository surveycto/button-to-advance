# Button to advance

<img src="extras/readme-images/button-to-advance.jpg" alt="Button-to-advance" width="300px"/>

## Description

Add this field plug-in to a *text* field to move to the next field by either clicking/tapping a button, or pressing a keyboard key. By default, that key is the spacebar, but it can be customized with the parameters.

If the respondent must use the specified key or a button (as opposed to simply swiping forward), make the *required* value of the field `yes`.

[![Beta](extras/readme-images/beta-release-download.jpg)](https://github.com/surveycto/button-to-advance/raw/master/button-to-advance.fieldplugin.zip)

*This plug-in is currently under beta. If you you find a problem with the field plug-in, please email max@surveycto.com.*

### Features

* **Button-based auto-advance**: Field auto-advances by clicking/tapping a button, and/or pressing the correct key on the keyboard. The keyboard key can be customized with the `key` parameter.
* **Customizeable start button**: The on-screen button can have a customized label, and it can even be removed completely, so the field can only advance using the keyboard key. The advance-by-keyboard-key can also be disabled.

### Data format

This field has no value until the correct keyboard key is pressed, or until the on-screen button is pressed. If the field advances by using the keyboard key, the field is given a value of `1`. If the field advances by clicking/tapping the button, the field is given a value of `2`. This will change if the respondent returns to this field and uses the other method to advance instead of simply swiping forward (e.g. If they had previously used a keyboard key to auto-advance, but then they go back and click the button, the field will have a value of `2`).

## How to use

### Getting started

**To use this field plug-in as-is**, just download the [button-to-advance.fieldplugin.zip](https://github.com/surveycto/button-to-advance/raw/master/button-to-advance.fieldplugin.zip) file from this repo, and attach it to your form.

### Parameters

All parameters are optional.

|Name|Description|Default|
|---|---|---|
|`allowback`|Whether the respondent can return to this field. By default, if a respondent attempts to return to this field (such as by swiping back), then this field will auto-advance, and bring them back to the field they were on. This is helpful for timed tests, such as EGRA tests or implicit association tests (IAT), since if the respondent's finger slips, and they accidentally swipe back, they will be brought back so they can easily continue. If this field has a value of `1`, then the respondent can return to this field, and it will not auto-advance them.|`0`|
|`buttontext`|Text on the start button.|`Start`|
|`key`|Key to press to advance to the next field. Make sure it is in single quotes, and lowercase. If you would like the respondent to only be able to advance by tapping/clicking the button, give this field a value of `'None'`.|(spacebar)|
|`nobutton`|Whether or not the button on the screen will be hidden. By default, the button will always be shown. If this parameter has a value of `1`, then the button will be hidden, and the respondent can only advance using the specified keyboard key.|`0`|

### Default SurveyCTO feature support

| Feature / Property | Support |
| --- | --- |
| Supported field type(s) | `text`|
| Default values | No |
| Custom constraint message | No |
| Custom required message | No |
| Read only | No |
| media:image | Yes |
| media:audio | Yes |
| media:video | Yes |
| `number` appearance | No |
| `numbers_decimal` appearance | No |
| `numbers_phone` appearance | No |
| `show_formatted` appearance | No |

## More resources

* **Sample form**  
You can find a basic form definition in this repo here: [extras/sample-form](extras/sample-form). For a more practical example, try out this field plug-in with th sample form for the [timed-field-list](https://github.com/surveycto/timed-field-list) field plug-in.

* **Developer documentation**  
More instructions for developing and using field plug-ins can be found here: [https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)
