import { Formdata } from '../../app/formdata/formdata';
import { School } from '../../app/formdata/school';
import { Skills } from '../../app/formdata/skills';
import { Honors } from '../../app/formdata/honors';
import { Contacts } from '../../app/formdata/contacts';
import { Publications } from '../../app/formdata/publications';
import { Experience } from '../../app/formdata/experience';
export class DomainData {
    public formdata: Formdata;
    public school: School[];    
    public skills: Skills[];
    public honors: Honors;
    public contacts: Contacts;
    public experience:Experience[];
    public publications: Publications[];
}
