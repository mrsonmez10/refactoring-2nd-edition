class Minion:
    _location: Location

    def action(self):
        if self._location.field.is_frontline():
            # Do Something

class Location:
    field: Field

class Field:
    def is_frontline(self)
        # Do Something