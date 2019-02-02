// Libraries
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

// Components
import {Form} from 'src/clockface'
import ConfigFieldHandler from 'src/dataLoaders/components/collectorsWizard/configure/ConfigFieldHandler'
import FancyScrollbar from 'src/shared/components/fancy_scrollbar/FancyScrollbar'

// Actions
import {setActiveTelegrafPlugin} from 'src/dataLoaders/actions/dataLoaders'

// Types
import {TelegrafPlugin, ConfigFields} from 'src/types/v2/dataLoaders'
import OnboardingButtons from 'src/onboarding/components/OnboardingButtons'

interface OwnProps {
  telegrafPlugin: TelegrafPlugin
  configFields: ConfigFields
}

interface DispatchProps {
  onSetActiveTelegrafPlugin: typeof setActiveTelegrafPlugin
}

type Props = OwnProps & DispatchProps

export class PluginConfigForm extends PureComponent<Props> {
  public render() {
    const {configFields, telegrafPlugin} = this.props
    return (
      <Form onSubmit={this.handleSubmitForm}>
        <div className="wizard-step--scroll-area">
          <FancyScrollbar autoHide={false}>
            <div className="wizard-step--scroll-content">
              <h3 className="wizard-step--title">
                {_.startCase(telegrafPlugin.name)}
              </h3>
              <h5 className="wizard-step--sub-title">
                For more information about this plugin, see{' '}
                <a
                  target="_blank"
                  href={`https://github.com/influxdata/telegraf/tree/master/plugins/inputs/${name}`}
                >
                  Documentation
                </a>
              </h5>
              <ConfigFieldHandler
                configFields={configFields}
                telegrafPlugin={telegrafPlugin}
              />
            </div>
          </FancyScrollbar>
        </div>
        <OnboardingButtons autoFocusNext={this.autoFocus} />
      </Form>
    )
  }

  private get autoFocus(): boolean {
    const {configFields} = this.props
    return !configFields
  }

  private handleSubmitForm = () => {
    this.props.onSetActiveTelegrafPlugin('')
  }
}

const mdtp: DispatchProps = {
  onSetActiveTelegrafPlugin: setActiveTelegrafPlugin,
}

export default connect<null, DispatchProps, OwnProps>(
  null,
  mdtp
)(PluginConfigForm)
