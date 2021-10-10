# lilbits

## Final React Project for NTV, 3rd semester.

### Finnbogi Jökull Pétursson

<br>
<p>Deployed on Netlify. However, not everything renders correctly. The styles for the date picker get lost.

<a href="https://fervent-colden-9bc7f2.netlify.app">https://fervent-colden-9bc7f2.netlify.app</a>

</p>
<br>

<p>There are some obviously unrealistic scenarios proposed. Upon having the data some things would change:</p>
<ul>
<li>Random dish and beverage generation would be switched for a proper menu with filters for categories etc.</li>
<li>An option for choosing how many different dishes in ratio with the number of guests.</li>
<li>The code only allows for one order per e-mail. Any user would be able to have multiple bookings and would be presented with a list when checking their orders.</li>

</ul>
<p>
The order object has the key <i>isProcessing</i>. The intention was to have the form remember your inputs and on the Receipt page be able to go back and edit before finalizing.
There were issues with putting default values in the inputs without having unwanted side effects, some minor but most breaking.
</p>
